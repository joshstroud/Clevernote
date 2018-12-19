Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]
    resources :notebooks, only: [:index, :show, :create, :update, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
    resources :taggings, only: [:index, :create, :destroy]
  end

  get '*unmatched_route', to: 'application#not_found'

  root "static_pages#root"
end
