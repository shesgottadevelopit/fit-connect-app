// Account.findOne({'username': req.params.username})
// .populate('profile')
// .exec(function (err, account) {
//     account.save();
//     console.log(account)
//     res.redirect(`/dashboard/profile/${account.username}`)
// })

//profile: profileSchema
//profile: {}
// profile: {
//     type: Schema.ObjectId,
//     ref: 'Profile',
//     default: Profile
//     // type: profileSchema,
//     // default: {profileSchema} // or {}
// }

<div>
    <input type="checkbox" name="workoutschedule" value="Early Morning" {% for item in account.profile.workoutschedule %}{% if item === "Early Morning" %} checked {% endif %}{% endfor %}>
    <label for="workoutpreference">Early Morning</label>
</div>
<div>
    <input type="checkbox" name="workoutschedule" value="Morning" {% for item in account.profile.workoutschedule %}{% if item === "Morning" %} checked {% endif %}{% endfor %}>
    <label for="">Morning</label>
</div>
<div>
    <input type="checkbox" name="workoutschedule" value="Afternoon" {% for item in account.profile.workoutschedule %}{% if item === "Afternoon" %} checked {% endif %}{% endfor %}>
    <label for="">Afternoon</label>
</div>
<div>
    <input type="checkbox" name="workoutschedule" value="Late Afternoon" {% for item in account.profile.workoutschedule %}{% if item === "Late Afternoon" %} checked {% endif %}{% endfor %}>
    <label for="">Late Afternoon</label>
</div>
<div>
    <input type="checkbox" name="workoutschedule" value="Evening" {% for item in account.profile.workoutschedule %}{% if item === "Evening" %} checked {% endif %}{% endfor %}>
    <label for="">Evening</label>
</div>

{# <div class="profile-form-group">
    <label for=""></label>
    <input type="text" name="" value="">
</div> #}
