Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :index, :show]
    resources :follows, only: [:create, :destroy, :show, :index]
    resource :session, only: [:new, :create, :destroy]
    resources :photos, only: [:create, :index, :show, :destroy, :edit]
    resources :likes, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :show, :index]
  end
end
