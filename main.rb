require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'dotenv'
require 'mail'

Dotenv.load

$stdout.sync = true

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


get '/' do
  File.read(File.join('public', 'index.html'))
end
get '/faqs/' do
    File.read(File.join('public/faqs','index.html'));
end
get '/faqs' do
    File.read(File.join('public/faqs','index.html'));
end
get '/xmaspromotion' do
  File.read(File.join('public/xmaspromotion', 'index.html'))
end

get '/xmaspromotion/' do
  File.read(File.join('public/xmaspromotion', 'index.html'))
end

post '/contact-form', :provides => :json do
  params = JSON.parse(request.body.read)

  full_name = params["fullName"]
  email = params["email"]
  company = params["company"]
  message = params["message"]

  Mail.deliver do
    to      ENV["TO_ADDRESS"]
    from    ENV["EMAIL_ADDRESS"]
    subject "A message from #{full_name} at #{company}"
    body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
  end

end

post '/sourcing-form', :provides => :json do
  params = JSON.parse(request.body.read)

  full_name = params["fullName"]
  email = params["email"]
  company = params["company"]
  message = params["message"]

  Mail.deliver do
    to      ENV["TO_ADDRESS"]
    from    ENV["EMAIL_ADDRESS"]
      subject "Sourcing enquiry from #{full_name} at #{company}"
    body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
  end
end

post '/partnership-form', :provides => :json do
  params = JSON.parse(request.body.read)

  full_name = params["fullName"]
  email = params["email"]
  company = params["company"]
  message = params["message"]

  Mail.deliver do
    to      ENV["PARTNERSHIP_RECIPIENT"]
    from    ENV["EMAIL_ADDRESS"]
      subject "Partnership enquiry from #{full_name} at #{company}"
    body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
  end
end

post '/job-form' do

  full_name = params["fullName"]
  position = params["position"]
  email = params["email"]
  cover_letter = params["coverLetter"]
  have_file = params["haveFile"]
    if(have_file=="true")
      file_name = params[:file][:filename]
      tempfile = params[:file][:tempfile]
      Mail.deliver do
        to      ENV["TO_ADDRESS"]
        from    ENV["EMAIL_ADDRESS"]
        subject "Application for #{position}"
        body    "#{full_name} has applied for the position of #{position}\n#{email}\n\n#{cover_letter}"
        add_file :filename => file_name, :content => File.read(tempfile)
      end
  else
      Mail.deliver do
        to      ENV["TO_ADDRESS"]
        from    ENV["EMAIL_ADDRESS"]
        subject "Application for #{position}"
        body    "#{full_name} has applied for the position of #{position}\n#{email}\n\n#{cover_letter}"
      end
  end
  

end