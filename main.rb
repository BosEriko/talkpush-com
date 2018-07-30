require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'dotenv'
require 'mail'
require 'json'

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

after do
  response.headers['X-Frame-Options']=''
end

get '/' do
  response.headers['X-Frame-Options']=''
  File.read(File.join('public', 'index.html'))
end

get '/termsandcond.html' do
  File.read(File.join('public', 'terms.html'))
end

# post '/quotation-form', :provides => :json do
#   params = JSON.parse(request.body.read)

#   full_name = params["name"]
#   email = params["email"]
#   company = params["company"]
#   volumes = params["volumes"]
#   phone = params["phone"]

#   Mail.deliver do
#     to      ENV["TO_ADDRESS"]
#     from    ENV["EMAIL_ADDRESS"]
#     subject "Quotation enquiry from #{full_name} at #{company}"
#     body    "Name: #{full_name}\nCompany: #{company}\nEmail: #{email}\nPhone: #{phone}\nExpected volumes: #{volumes}"
#   end
#   content_type :json
#   { :sucess => 'sucess'}.to_json
# end

post '/whatsapp-form', :provides => :json do
  params = JSON.parse(request.body.read)

  full_name = params["name"]
  email     = params["email"]
  company   = params["company"]
  volumes   = params["volumes"]
  phone     = params["phone"]

  # Mail.deliver do
  #   to      ENV["TO_ADDRESS"]
  #   from    ENV["EMAIL_ADDRESS"]
  #   subject "Whatsapp enquiry from #{full_name} at #{company}"
  #   body    "Name: #{full_name}\nCompany: #{company}\nEmail: #{email}\nPhone: #{phone}\nExpected volumes: #{volumes}"
  # end
  content_type :json
  # { :sucess => 'sucess'}.to_json
  { :sucess => "worked! " + params}.to_json
end

# get '/free-demo' do
#   File.read(File.join('public/free-demo', 'index.html'))
# end
# get '/free-demo/' do
#   File.read(File.join('public/free-demo', 'index.html'))
# end
# get '/faqs/' do
#     File.read(File.join('public/faqs','index.html'));
# end
# get '/faqs' do
#     File.read(File.join('public/faqs','index.html'));
# end
# get '/xmaspromotion' do
#   File.read(File.join('public/xmaspromotion', 'index.html'))
# end
# get '/xmaspromotion/' do
#   File.read(File.join('public/xmaspromotion', 'index.html'))
# end

# post '/contact-form', :provides => :json do
#   params = JSON.parse(request.body.read)
#   full_name = params["fullName"]
#   email = params["email"]
#   company = params["company"]
#   message = params["message"]
#
#   Mail.deliver do
#     to      'bos.eriko@gmail.com'
#     from    ENV["EMAIL_ADDRESS"]
#     subject "A message from #{full_name} at #{company}"
#     body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
#   end
#   content_type :json
#   { :sucess => 'sucess'}.to_json
# end

# post '/sourcing-form', :provides => :json do
#   params = JSON.parse(request.body.read)
#
#   full_name = params["fullName"]
#   email = params["email"]
#   company = params["company"]
#   message = params["message"]
#
#   Mail.deliver do
#     to      ENV["TO_ADDRESS"]
#     from    ENV["EMAIL_ADDRESS"]
#       subject "Sourcing enquiry from #{full_name} at #{company}"
#     body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
#   end
# end

# post '/first-time-sub-form', :provides => :json do
#   params = JSON.parse(request.body.read)
#
#   email = params["email"]
#
#   Mail.deliver do
#     to      ENV["TO_ADDRESS"]
#     from    ENV["EMAIL_ADDRESS"]
#       subject "First time sign up from #{email}"
#     body    "A new first time sign up \n Email: #{email}"
#   end
# end

# post '/partnership-form', :provides => :json do
#   params = JSON.parse(request.body.read)
#
#   full_name = params["fullName"]
#   email = params["email"]
#   company = params["company"]
#   message = params["message"]
#
#   Mail.deliver do
#     to      ENV["PARTNERSHIP_RECIPIENT"]
#     from    ENV["EMAIL_ADDRESS"]
#       subject "Partnership enquiry from #{full_name} at #{company}"
#     body    "#{full_name}\n#{company}\n#{email}\n\n#{message}"
#   end
# end

# Test Start

# post '/test-form', :provides => :json do
#   params = JSON.parse(request.body.read)
#
#   full_name = params["fullName"]
#
#   Mail.deliver do
#     to      'bos.eriko@gmail.com'
#     from    'mail@boseriko.com'
#       subject "This is a test"
#     body    "This is a test message"
#   end
# end

# Test End

# post '/job-form' do
#
#   full_name = params["fullName"]
#   position = params["position"]
#   email = params["email"]
#   cover_letter = params["coverLetter"]
#   have_file = params["haveFile"]
#     if(have_file=="true")
#       file_name = params[:file][:filename]
#       tempfile = params[:file][:tempfile]
#       Mail.deliver do
#         to      ENV["TO_ADDRESS"]
#         from    ENV["EMAIL_ADDRESS"]
#         subject "Application for #{position}"
#         body    "#{full_name} has applied for the position of #{position}\n#{email}\n\n#{cover_letter}"
#         add_file :filename => file_name, :content => File.read(tempfile)
#       end
#   else
#       Mail.deliver do
#         to      ENV["TO_ADDRESS"]
#         from    ENV["EMAIL_ADDRESS"]
#         subject "Application for #{position}"
#         body    "#{full_name} has applied for the position of #{position}\n#{email}\n\n#{cover_letter}"
#       end
#   end
#
#
# end
