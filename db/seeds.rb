user1 = User.where(email: 'test@testing1.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'test2@testing2.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user1 = User.where(email: 'test@testing3.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'test2@testing4.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
workout = [
    {
        name: 'Arnold',
        type: 'Weight-lifting',
        user_id: 1,
        duration: '0:90:00',
        schedule: '04/18/2023 00:00',
        description: '
        Bench press: 4 sets of 12, (60-75% of Bodyweight)
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
        Bodyweight Dips: 4 sets of 12
        Push ups: 4 sets to failure
        Adjust weight by comfortablity'
    },
       {
        name: 'Phelps',
        type: 'Swimming',
        user_id: 2,
        duration: '0:180:00',
        schedule: '04/23/2023 00:00',
        description: '
        25m swim sprints: 4 times
        50m swim: 4 times
        100m swim: 4 times
        500m swim: 1 time
        Stretch! : cooldown
        '
    },
       {
        name: 'Elephant',
        type: 'Weight-Lifting',
        user_id: 3,
        duration: '0:90:00',
        schedule: '04/30/2023 00:00',
        description: '
        Leg press: 4 sets of 12
        Squats (weighted or no weighted): 4 sets of 12
        Romanian Deadlifts: 4 sets of 12
        Hip Thrusts: 4 sets of 12
        Adjust weight by comfortablity'
    },
       {
        name: 'Peace',
        type: 'Stretch',
        user_id: 4,
        duration: '0:50:00',
        schedule: '04/22/2023 00:00',
        description: '
        Cross arm body stretch: 2 times for 30s each arm
        Shoulder mobility, T Y, and U poses 12 reps each
        Hip Mobility 2 times for 30s each leg side
        Ankle mobility: 20s each ankle side to side
        Take your time each exercise'
    },
]