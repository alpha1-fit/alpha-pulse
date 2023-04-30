user1 = User.where(email: 'test@testing1.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Dennis', photo: 'url')
user2 = User.where(email: 'test2@testing2.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Chris', photo: 'url')
user3 = User.where(email: 'test@testing3.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Joel', photo: 'url')


user1_workouts = [
    {
        name: 'Arnold',
        workout_type: 'Weightlifting',
        duration: '90',
        schedule: '2023-04-18 00:00',
        description: '
        Bench press: 4 sets of 12, (60-75% of Bodyweight) \n
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight) \n
        Bodyweight Dips: 4 sets of 12 \n
        Push ups: 4 sets to failure \n
        Adjust weight by comfortablity'
    },
       {
        name: 'Phelps',
        workout_type: 'Swimming',
        duration: '180',
        schedule: '2023/04/23 00:00',
        description: '
        25m swim sprints: 4 times \n
        50m swim: 4 times \n
        100m swim: 4 times \n
        500m swim: 1 time \n
        Stretch! : cooldown
        '
    }
]

user2_workouts = [
    {
        name: 'Elephant',
        workout_type: 'WeightLifting',
        duration: '90',
        schedule: '2023/04/30 00:00',
        description: '
        Leg press: 4 sets of 12 \n
        Squats (weighted or no weighted): 4 sets of 12 \n
        Romanian Deadlifts: 4 sets of 12 \n
        Hip Thrusts: 4 sets of 12 \n
        Adjust weight by comfortablity'
    }
]
       
user3_workouts = [
    {
        name: 'Peace',
        workout_type: 'Stretch',
        duration: '50',
        schedule: '2023/04/22 00:00',
        description: '
        Cross arm body stretch: 2 times for 30s each arm \n
        Shoulder mobility, T Y, and U poses 12 reps each \n
        Hip Mobility 2 times for 30s each leg side \n
        Ankle mobility: 20s each ankle side to side \n
        Take your time each exercise'
    }
]

user1_workouts.each do |workout|
     user1.workouts.create(workout)
    p "Created: #{workout}"
end
workout1 = Workout.last

user2_workouts.each do |workout|
     user2.workouts.create(workout)
    p "Created: #{workout}"
end
workout2 = Workout.last

user3_workouts.each do |workout|
     user3.workouts.create(workout)
    p "Created: #{workout}"
end
workout3 = Workout.last

comment1 = Comment.create(title: 'Terminator', comment: 'Ill be back...', workout_id: workout1.id,user_id: user1.id)
comment2 = Comment.create(title: 'Trunk', comment: 'Ill remember this workout!', workout_id: workout2.id, user_id: user2.id)
comment3 = Comment.create(title: 'Zen', comment: 'what a great stretch!', workout_id: workout3.id, user_id: user3.id)