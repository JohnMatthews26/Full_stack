# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all
User.destroy_all

user1 = User.create(username: "john", password: "password")
user2 = User.create(username: "BrucetheBulldog", password: "password")
user3 = User.create(username: "ClairetheCavalier", password: "password")
user4 = User.create(username: "PaulthePug", password: "password")
user5 = User.create(username: "LeonardtheLab", password: "password")
user6 = User.create(username: "BeatricetheBeagle", password: "password")
user7 = User.create(username: "ILoveD0gs126", password: "password")
user8 = User.create(username: "C0lliesRtheBest", password: "password")
user9 = User.create(username: "Andrew", password: "password")
user10 = User.create(username: "C0rgiL0v3r", password: "password")

photo1 = Photo.create(user_id: user6.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/beagle_vbyffl.jpg")
photo1 = Photo.create(user_id: user6.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/beagle_puppy_with_ball_nc5q5l.jpg")
photo1 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260509/lab_ntbnvi.jpg")
photo1 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/lab_in_flowers_hgg98x.jpg")
photo1 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/lab_puppies_qxzryn.jpg")
photo1 = Photo.create(user_id: user3.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/cavalier_rtv5pw.jpg")
photo1 = Photo.create(user_id: user3.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/another_cavalier_vu8qfc.jpg")
photo1 = Photo.create(user_id: user2.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/bulldog_hmqsuf.jpg")
photo1 = Photo.create(user_id: user2.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/bulldog_puppy_ihfkp2.jpg")
photo1 = Photo.create(user_id: user4.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/pug_puppy_tjsulh.jpg")
photo1 = Photo.create(user_id: user4.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/pug_being_pet_gulnp9.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260508/boxer_puppy_atjtsv.jpg")
photo1 = Photo.create(user_id: user8.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/collie_wgprbt.jpg")
photo1 = Photo.create(user_id: user8.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/two_collies_bu5dhm.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/little_dog_zxow0i.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/puppy_in_a_mug_waafwm.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/weiner_dog_puppy_s7wxyk.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/black_and_white_puppy_p5hwd0.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/small_dog_yr6ayv.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/mastiff_ft89kx.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_in_costume_risfex.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_getting_bath_dfzjwp.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_with_cupcakes_x9pc1x.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_chewing_on_ball_pajkls.jpg")
photo1 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_wtih_bow_tie_lchvrf.jpg")
photo1 = Photo.create(user_id: user9.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501180865/xlheo16rduiaeyqhahiw.jpg")
photo1 = Photo.create(user_id: user10.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501192634/h9b5ekajf01ybyri9zgb.jpg")
photo1 = Photo.create(user_id: user10.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/puppy_corgi_cfm7vs.jpg")
