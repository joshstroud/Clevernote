#!/bin/bash
heroku restart && heroku pg:reset DATABASE --confirm clevernote-josh-stroud && heroku run rake db:migrate && heroku run rails db:seed