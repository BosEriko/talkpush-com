require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'pony'
require 'dotenv'

Dotenv.load

$stdout.sync = true

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/contact-form', :provides => :json do
  params = JSON.parse(request.body.read)
  Pony.mail({
    :to => ENV["TO_ADDRESS"],
    :via => :smtp,
    :from => ENV["EMAIL_ADDRESS"],
    :subject => 'Talkpush.com contact form',
    # :headers => { 'Content-Type' => 'text/html' }, #for adding html emails into the body field
    :body => params["fullName"] + "\n" + params["company"] + "\n" + params["email"] + "\n\n" + params["message"],
    :via_options => {
      :address        => 'smtp.gmail.com',
      :port           => '25',
      :user_name      => ENV["EMAIL_ADDRESS"],
      :password       => ENV["EMAIL_PASSWORD"],
      :authentication => :plain,
      :domain         => ENV["DOMAIN"]
    }
  })
end