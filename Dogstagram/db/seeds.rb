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
photo1 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503779/IMG_0350_f7qrxq.jpg", user_id: user1.id)
photo2 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0352_mnuoym.jpg", user_id: user1.id)
photo3 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0370_woasjv.jpg", user_id: user1.id)
photo4 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0354_p3hunu.jpg", user_id: user1.id)
photo5 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503775/IMG_0368_iwy0b9.jpg", user_id: user1.id)
photo6 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503774/IMG_0376_xwa7tv.jpg", user_id: user1.id)
photo7 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503774/IMG_0377_ijtmvv.jpg", user_id: user1.id)
photo8 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0375_vzbmis.jpg", user_id: user1.id)
photo9 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0390_zvtjua.jpg", user_id: user1.id)
photo10 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0427_lpcq4v.jpg", user_id: user1.id)
photo11 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0401_wqvnvq.jpg", user_id: user1.id)
photo12 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503772/IMG_0415_ylx6ds.jpg", user_id: user1.id)
photo13 = Photo.create(url: "http://res.cloudinary.com/roscoe/image/upload/v1500503772/IMG_0410_hbdsy7.jpg", user_id: user1.id)
