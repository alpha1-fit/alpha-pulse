user1 = User.where(email: 'test@testing1.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Dennis', photo: 'url')
user2 = User.where(email: 'test2@testing2.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Chris', photo: 'url')
user3 = User.where(email: 'test@testing3.com').first_or_create(password: 'testing123', password_confirmation: 'testing123', username: 'Joel', photo: 'url')
comment1 = Comment.create(title: 'Terminator', comment: 'Ill be back...', workout_id: 1,user_id: 1)
comment2 = Comment.create(title: 'Trunk', comment: 'Ill remember this workout!', workout_id: 1,user_id: 2)
comment3 = Comment.create(title: 'Zen', comment: 'what a great stretch!', workout_id: 1,user_id: 3)



user1_workouts = [
    {
        name: 'Arnold',
        workout_type: 'Weightlifting',
        duration: '90',
        schedule: '2023-04-18 00:00',
        description: '
        Bench press: 4 sets of 12, (60-75% of Bodyweight)
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
        Bodyweight Dips: 4 sets of 12
        Push ups: 4 sets to failure
        Adjust weight by comfortablity'
    },
       {
        name: 'Phelps',
        workout_type: 'Swimming',
        duration: '180',
        schedule: '2023/04/23 00:00',
        description: '
        25m swim sprints: 4 times
        50m swim: 4 times
        100m swim: 4 times
        500m swim: 1 time
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
        Leg press: 4 sets of 12
        Squats (weighted or no weighted): 4 sets of 12
        Romanian Deadlifts: 4 sets of 12
        Hip Thrusts: 4 sets of 12
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
        Cross arm body stretch: 2 times for 30s each arm
        Shoulder mobility, T Y, and U poses 12 reps each
        Hip Mobility 2 times for 30s each leg side
        Ankle mobility: 20s each ankle side to side
        Take your time each exercise'
    }
]

user1_workouts.each do |workout|
     user1.workouts.create(workout)
    p "Created: #{workout}"
end

user2_workouts.each do |workout|
     user2.workouts.create(workout)
    p "Created: #{workout}"
end

user3_workouts.each do |workout|
     user3.workouts.create(workout)
    p "Created: #{workout}"
end