class Api::ItemsController < ApplicationController
    before_action :set_department, only:[:create, :index]
    before_action :set_item, only: [:destroy]

    def index
        render json: @department.items.all
    end 
   
    def create
        item = @department.items.new(item_params)
        if item.save
            render json: item
        else
            render json: {errors: item.errors, status: 422}
        end 
    end 

    def destroy
        render json: @item.destroy
    end

    private
    
    def set_item
        @item = Item.find(params[:id])
    end 

    def set_department
        @department = Department.find(params[:department_id])
    end 

    def item_params
        params.require(:item).require(:name, :price, :description)
    end 
end
