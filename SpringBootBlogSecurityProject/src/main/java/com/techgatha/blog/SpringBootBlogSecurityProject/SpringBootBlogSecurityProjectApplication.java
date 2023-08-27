package com.techgatha.blog.SpringBootBlogSecurityProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.techgatha.blog.SpringBootBlogSecurityProject.entity.Blog;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.LoginUser;
import com.techgatha.blog.SpringBootBlogSecurityProject.repo.BlogRepository;
import com.techgatha.blog.SpringBootBlogSecurityProject.repo.LoginUserRepository;

@SpringBootApplication
public class SpringBootBlogSecurityProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBlogSecurityProjectApplication.class, args);
	}
	@Autowired
	private BlogRepository repo;
	
	@Autowired
	private LoginUserRepository userrepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Bean
	public void initialize()
	{
	    LoginUser user = new LoginUser();
        user.setEmail("shalini@gmail.com");
        user.setPassword(encoder.encode("shalini"));
        
        LoginUser user1 = userrepo.save(user);
        
        user = new LoginUser();
        user.setEmail("abc@gmail.com");
        user.setPassword(encoder.encode("abc"));
        
        LoginUser user2 = userrepo.save(user);
        
		Blog b1 = new Blog();
		b1.setTitle("Marine Drive");
		b1.setContent("Marine Drive is a 3 kilometre-long Promenade along the Netaji Subhash Chandra Bose Road in Mumbai, India. The road and promenade were constructed by Pallonji Mistry. It is a 'C'-shaped six-lane concrete road along the coast of a natural bay.Marine Drive is a 3 kilometre-long Promenade along the Netaji Subhash Chandra Bose Road in Mumbai, India. The road and promenade were constructed by Pallonji Mistry. It is a 'C'-shaped six-lane concrete road along the coast of a natural bay.");
		b1.setCreated("12/12/2020");
		b1.setCategory("Beaches");
		b1.setImgurl("https://media.istockphoto.com/id/1008831236/photo/panoramic-view-of-marine-drive-at-dusk-mumbai-india.jpg?s=612x612&w=0&k=20&c=gZ_wmR5bWHCnbeGsXaXxPcv1XTmfGsYVcrzNzIr-aOY=");
		b1.setUser(user1);
		repo.save(b1);
		
		Blog b2 = new Blog();
		b2.setTitle("Statue Of Unity");
		b2.setContent("The Statue of Unity is the world's tallest statue, with a height of 182 metres, located near Kevadia in the state of Gujarat, India. It depicts Indian statesman and independence activist Vallabhbhai Patel, who was the first deputy prime minister and home minister of independent India and an adherent of Mahatma Gandhi");
		b2.setCreated("12/12/2020");
		b2.setCategory("Tourism");
		b2.setImgurl("https://assets3.thrillist.com/v1/image/2793859/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg");
		b2.setUser(user1);
		repo.save(b2);
		
		Blog b3 = new Blog();
        b3.setTitle("Mobile boon or curse");
        b3.setContent("If you’re a human being living above the poverty line in the 21st century, then you probably have a smartphone on your own or a person next to you while you work, socialize, exercise, eat and even while you sleep. In fact, two-thirds of the world’s population own at least one. As everyone is fully aware of, Smartphones are mobile phones with an advanced mobile operating system that combines features of a computer operating system. ");
        b3.setCreated("12/12/2020");
        b3.setCategory("Technology");
        b3.setImgurl("https://i0.wp.com/techarenahindi.in/wp-content/uploads/2022/08/good-bad.webp?w=1280&ssl=1");
        b3.setUser(user2);
        repo.save(b3);
        
        Blog b4 = new Blog();
        b4.setTitle("An experience of a cruise");
        b4.setContent("THE MAJESTIC PRINCESS IS THE NEW CRUISE by the popular Princess Cruise. Though I have been traveling close to 10 years now, but cruise has still not fallen on my radar until I decided to board my maiden cruise voyage aboard Majestic Princess facilitated by Cruise Professionals. Post the Bollywood blockbuster ‘Dil Dhadakne Do’ by maverick director Zoya Akhtar, Indians have taken a fancy for cruise. I had seen it before in movies like Mann and Humraaz but it didn’t really caught my fancy then.");
        b4.setCreated("12/12/2020");
        b4.setCategory("Beaches");
        b4.setImgurl("https://5.imimg.com/data5/SELLER/Default/2023/3/296734693/LN/FD/GY/103490169/cruise-booking-service.jpeg");
        b4.setUser(user2);
        repo.save(b4);
        
        Blog b5 = new Blog();
        b5.setTitle("Pet Dog information!!");
        b5.setContent("Labrador Retrievers are the number one dog breed in the United States for many reasons. They are friendly, hardworking, and intelligent dogs. Come see why we love the Lab and find out if it's the right breed for your family!");
        b5.setCreated("12/12/2020");
        b5.setCategory("Personal");
        b5.setImgurl("https://www.loveyourdog.com/wp-content/uploads/2019/06/Labrador-History-1400x778.jpg.webp");
        b5.setUser(user1);
        repo.save(b5);
        
        Blog b51 = new Blog();
        b51.setTitle("How are drones used in crop science?");
        b51.setContent("With drone advancements and lower costs, drones have become more common in the daily activities of crop science research. They can replace the hard work of walking through fields, taking measurements and identifying problems. They help scientists accelerate discoveries and reduce labor costs to create more nutritious, high-yielding, and flavorful crops.");
        b51.setCreated("12/12/2020");
        b51.setCategory("Technology");
        b51.setImgurl("https://i0.wp.com/sustainable-secure-food-blog.com/wp-content/uploads/drones-Figure_Maturity.jpg?w=1334&ssl=1");
        b51.setUser(user1);
        repo.save(b51);
        
        Blog b52 = new Blog();
        b52.setTitle("Living with Purpose");
        b52.setContent("“Why am I here?” It’s the biggest existential question we all must wrestle with. We all long to understand our purpose. And if we truly want to understand our purpose we must know it all starts with God. It’s not about you; it’s not about me; it’s not about this person or that person. Our purpose is far greater than ourselves and starts with understanding the author of it all. Lean into this series as we rediscover what it is like to live purpose-driven lives in light of being made by God and for God and with a grand and fulfilling purpose!");
        b52.setCreated("12/12/2020");
        b52.setCategory("Personal");
        b52.setImgurl("https://newbreak.church/wp-content/uploads/2023/01/Living-With-Purpose-Title.jpg");
        b52.setUser(user2);
        repo.save(b52);
        
        for(Blog b:repo.findAllBlogByUserEmail("shalini@gmail.com"))
            System.out.println(b);
		
		
	}

}
