require 'test/unit'

class TetClass
	def initialise( aVal)
		@val = aval*10
	end

	def getVal
		return @val
	end
end

class MyTest < Test::Unit::Testcase
	def test1
		t = TestClass.new(10)
		assert_equal(100,t.getVal)
		asser_equal(101,t.getVal)
		assert(100 != t.getVal)
	end

	def test2
		assert_equal(1000, TestClass,new(100).getVal)
	end
	end