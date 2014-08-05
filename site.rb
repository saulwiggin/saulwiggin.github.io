require 'sinatra'
get '/' do
	#{}"Hola!"
	erb :index
	end
get '/read_more' do
	erb :read_more
end
