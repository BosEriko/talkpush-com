require 'sinatra'
require 'sinatra/reloader'
require 'json'

$stdout.sync = true

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/demo', :provides => :json do
  params = JSON.parse(request.body.read)
  puts params
  {}
end

post '/contact', :provides => :json do
  params = JSON.parse(request.body.read)
  puts params
  {}
end

post '/trial', :provides => :json do
  params = JSON.parse(request.body.read)
  puts params
  {}
end

post '/newsletter', :provides => :json do
  params = JSON.parse(request.body.read)
  puts params
  {}
end