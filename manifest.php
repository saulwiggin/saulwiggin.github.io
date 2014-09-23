<?php
	header('Content-Type: text/cahe-manifest');
	echo "CAHCE MANIFEST\n";
	
	$hashes = "";
	
	$dir = new RecursiveDirectoryIterator(".");
	foreach(new RecursiveIterator($dir) as $file){
		if ($file->isFile() &&
				$file != "./manifest.php" &&
				!strpos($file, '/.') &&
				substr($file ->getfilename(), 0, 1) != ".") {
			echo $file . "\n";
			$hashes .= md5_file($file);
		}
	}
	echo "# Hash: " . md5($hashes) . "\n";
?>