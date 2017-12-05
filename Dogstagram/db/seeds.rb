# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all
User.destroy_all
Like.destroy_all

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
user11 = User.create(username: "doglover47", password: "password")

photo27 = Photo.create(user_id: user10.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501192634/h9b5ekajf01ybyri9zgb.jpg")
photo1 = Photo.create(user_id: user6.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/beagle_vbyffl.jpg")
photo2 = Photo.create(user_id: user6.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/beagle_puppy_with_ball_nc5q5l.jpg")
photo3 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260509/lab_ntbnvi.jpg")
photo32 = Photo.create(user_id: user11.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/husky_and_dalmation_eq059u.jpg")
photo5 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/lab_puppies_qxzryn.jpg")
photo10 = Photo.create(user_id: user4.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/pug_puppy_tjsulh.jpg")
photo6 = Photo.create(user_id: user3.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/cavalier_rtv5pw.jpg")
photo8 = Photo.create(user_id: user2.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/bulldog_hmqsuf.jpg")
photo9 = Photo.create(user_id: user2.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/bulldog_puppy_ihfkp2.jpg")
photo11 = Photo.create(user_id: user4.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/pug_being_pet_gulnp9.jpg")
photo12 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260508/boxer_puppy_atjtsv.jpg")
photo13 = Photo.create(user_id: user8.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/collie_wgprbt.jpg")
photo14 = Photo.create(user_id: user8.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/two_collies_bu5dhm.jpg")
photo15 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/little_dog_zxow0i.jpg")
photo16 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/puppy_in_a_mug_waafwm.jpg")
photo17 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260501/weiner_dog_puppy_s7wxyk.jpg")
photo18 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/black_and_white_puppy_p5hwd0.jpg")
photo19 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/small_dog_yr6ayv.jpg")
photo20 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/mastiff_ft89kx.jpg")
photo21 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_in_costume_risfex.jpg")
photo22 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_getting_bath_dfzjwp.jpg")
photo23 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_with_cupcakes_x9pc1x.jpg")
photo24 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_chewing_on_ball_pajkls.jpg")
photo25 = Photo.create(user_id: user7.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/dog_wtih_bow_tie_lchvrf.jpg")
photo26 = Photo.create(user_id: user9.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501180865/xlheo16rduiaeyqhahiw.jpg")
photo28 = Photo.create(user_id: user10.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/puppy_corgi_cfm7vs.jpg")
photo29 = Photo.create(user_id: user2.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/bulldog_with_food_voqv3s.jpg")
photo30 = Photo.create(user_id: user11.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/dalmation_qq4ecb.jpg")
photo31 = Photo.create(user_id: user11.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/puppy_looking_at_camera_nwyyj6.jpg")
photo7 = Photo.create(user_id: user3.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260499/another_cavalier_vu8qfc.jpg")
photo33 = Photo.create(user_id: user11.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/black_and_white_dog_photo_o9pl1g.jpg")
photo34 = Photo.create(user_id: user11.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501263253/pitbull_kago5j.jpg")
photo4 = Photo.create(user_id: user5.id, url: "http://res.cloudinary.com/roscoe/image/upload/v1501260500/lab_in_flowers_hgg98x.jpg")
