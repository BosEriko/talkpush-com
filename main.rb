require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'pony'
require 'dotenv'
require 'mail'

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
    :subject => 'A message from ' + params["fullName"] + ' at ' + params["company"],
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
  puts params
end

post '/job-form', :provides => :json do

  options = { :address              => "smtp.gmail.com",
              :port                 => 25,
              :domain               => ENV["DOMAIN"],
              :user_name            => ENV["EMAIL_ADDRESS"],
              :password             => ENV["EMAIL_PASSWORD"],
              :authentication       => 'plain',
              :enable_starttls_auto => true  }



  Mail.defaults do
    delivery_method :smtp, options
  end

  full_name = params["fullName"]
  position = params["position"]
  email = params["email"]
  cover_letter = params["coverLetter"]
  file_name = params[:file][:filename]
  tempfile = params[:file][:tempfile]

  Mail.deliver do
    to      ENV["TO_ADDRESS"]
    from    ENV["EMAIL_ADDRESS"]
    subject "Application for #{position}"
    body    "#{full_name} has applied for the position of #{position}\n#{email}\n\n#{cover_letter}"
    add_file :filename => file_name, :content => File.read(tempfile)
  end


  puts params
end