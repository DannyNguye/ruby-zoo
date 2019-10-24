# RubyZoo

[![Codeship Status for DannyNguye/ruby-zoo](https://app.codeship.com/projects/9a191a20-d1a9-0137-bb69-261d00880206/status?branch=master)](https://app.codeship.com/projects/369670)

## Heroku Link
https://ruby-zoo.herokuapp.com/

## Technologies

Ruby - 2.6.5
Rails - 5.2.3
React - 16.8.0
CarrierWave - 2.0.2
Foundation-Rails - 6.5.3.0

An animal review site that allows users to add their favorite zoo animals and review/vote on those animals.

##To Run Locally

* Download the Repo
* 'yarn install' and 'bundle install' from your terminal
* create the database: 'bundle exec rake db:create', 'bundle exec rake db:migrate', 'bundle exec rake db:seed'
* You will need an AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, placed in a .env file
* 'yarn run start' and 'rails s'
* Navigate your browser to localhost:3000
* Run test suite with `yarn test` and `rspec`

## Authors
Danny Nguyen, Priti Patil, Shani Fox, and Casey Whittaker
