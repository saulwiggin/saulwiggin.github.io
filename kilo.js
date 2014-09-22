var db;
$(document).ready(function(){
	$('#createEntry form').submit(createEntry);
	$('#settings form').submit(saveSettings);
	$('#settings').bind('pageAnimationStart', loadSettings);
	$('#dates li a').click(function(){
		var dayOffset = this.id;
		var date = new Date();
		date.setDate(date.getDate() - dayOffset);
		sessionStorage.currentDate = date.getMonth() + 1 + '/' +
									date.getDate() + '/' +
									date.fetFullYear();
		refreshEntries();
	});
});
var shortName = 'Kilo';
var version = '1.0';
var displayName = 'Kilo';
var maxSize = 65536;
db = openDatabase(shortName, version, displayName, maxSize);
db.transaction(
	function(transaction) {
		transaction.executeSql(
			'CREATE TABLE IF NOT EXISTS entries ' +
			' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
			' date DATE NOT NULL, food TEXT NOT NULL, ' +
			' calories INTEGER NOT NULL );'
		);
	}
);
function createEntry() {
		var date = sessionStorage.currentDate;
		var calories = $('#calories').val();
		var food = $('#food').val();
		db.transaction(
			function(transaction) {
				transaction.executeSql(
					'INSERT INTO entries (date, calories, food) VALUES (?, ?, ?);',
					function(){
						refreshEntries();
						jQT.goBack();
						},
						errorHandler
					);
				}
			);
			return false;
		}