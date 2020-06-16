10.times do
    Department.create(name: Faker::Commerce.department)
    Department.all.each do |department|
      10.times do
        department.items.create(
          name: Faker::Commerce.product_name,
          description: Faker::Lorem.sentence,
          price: Faker::Commerce.price.to_f,
        )
      end 
    end 
  end

  puts "10 Departments Seeded"
  puts "100 items seededs"