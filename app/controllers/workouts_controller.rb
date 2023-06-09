class WorkoutsController < ApplicationController
    def index
      workouts = Workout.all
      render json: workouts
    end
      
    def create
      workout = Workout.create(workout_params)
      if workout.valid? 
        render json: workout
      else
        render json: workout.errors, status: 422
      end
    end

    def update
        workout = Workout.find(params[:id])
        workout.update(workout_params)
        if workout.valid?
            render json: workout
        else
            render json: workout.errors, status: 422
        end
    end

    def destroy
      workout = Workout.find(params[:id])
      workout.destroy
      if workout.valid?
        render json: workout
      end
  end

    private
      def workout_params
        params.require(:workout).permit(:name, :workout_type, :duration, :schedule, :description, :user_id)
      end
  end