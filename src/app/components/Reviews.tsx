import Slider from 'react-slick';
import { Star, ExternalLink } from 'lucide-react';

export function Reviews() {
  const reviews = [
    { name:'Rajesh Patil',rating:5,text:'Excellent service! Dr. Rohit Chougule is highly professional and caring. The clinic is very clean and modern. My root canal treatment was completely painless. Highly recommended!',time:'2 weeks ago'},
    { name:'Sneha Deshmukh',rating:5,text:'Best dental clinic in Ashta! The staff is very friendly and the doctors are extremely skilled. Got my teeth whitening done here and the results are amazing!',time:'1 month ago'},
    { name:'Amit Kulkarni',rating:5,text:'Very happy with the dental implant treatment. Dr. Pranagha explained everything clearly and the procedure was smooth. The clinic maintains high hygiene standards.',time:'3 weeks ago'},
    { name:'Priya Sharma',rating:5,text:'Outstanding experience! Got braces for my daughter and the treatment has been excellent. The doctors are patient and explain every step. Affordable prices too!',time:'1 week ago'},
    { name:'Sanjay Jadhav',rating:5,text:'Professional and reliable dental clinic. The equipment is modern and the treatment is painless. I have been visiting for regular checkups and always satisfied.',time:'2 months ago'},
    { name:'Kavita Shinde',rating:5,text:'Fantastic service! The smile designing treatment exceeded my expectations. Dr. Chougule is an expert and the results are beautiful. Thank you!',time:'3 weeks ago'},
    { name:'Vishal Pawar',rating:5,text:'Highly recommend this clinic! Very professional staff, clean environment, and advanced treatment options. Got my wisdom tooth extracted without any pain.',time:'1 month ago'},
    { name:'Meera Kale',rating:5,text:'Best dental care in Ashta! The doctors are experienced and gentle. My entire family gets treatment here. Excellent hygiene and affordable rates.',time:'2 weeks ago'},
    { name:'Rahul Desai',rating:5,text:'Amazing experience with dental implants. Dr. Rohit is very knowledgeable and made me feel comfortable throughout the procedure. Top-notch facility!',time:'1 month ago'},
    { name:'Anita Joshi',rating:5,text:'The best dental clinic in the region! Professional staff, advanced equipment, and excellent results. My teeth cleaning was thorough and painless.',time:'2 weeks ago'},
    { name:'Suresh Patil',rating:5,text:'Very impressed with the quality of care. The doctors take time to explain everything and ensure you are comfortable. Highly recommend for all dental needs!',time:'3 weeks ago'},
    { name:'Deepa Kadam',rating:5,text:'Excellent orthodontic treatment! My son got braces here and the results are fantastic. Dr. Pranagha is very patient and caring with children.',time:'1 month ago'},
    { name:'Mahesh Shinde',rating:5,text:'Outstanding dental care! The root canal treatment was completely painless. The clinic is spotlessly clean and the staff is very professional.',time:'2 months ago'},
    { name:'Pooja Kulkarni',rating:5,text:'Best dental clinic experience! The smile makeover I got here completely transformed my confidence. Dr. Chougule is truly an expert in cosmetic dentistry.',time:'1 week ago'},
    { name:'Vijay Jadhav',rating:5,text:'Highly professional and caring doctors. Got my dental crown done here and it looks natural and perfect. Very satisfied with the treatment!',time:'3 weeks ago'},
    { name:'Savita Pawar',rating:5,text:'Wonderful experience! The doctors are friendly and explain everything clearly. My teeth whitening results are better than I expected. Thank you!',time:'2 weeks ago'},
    { name:'Anil More',rating:5,text:'Excellent dental clinic with state-of-the-art facilities. The doctors are highly skilled and the staff is very cooperative. Great experience overall!',time:'1 month ago'},
    { name:'Manisha Deshmukh',rating:5,text:'Very happy with my dental treatment here. The clinic is modern and hygienic. Dr. Rohit is very professional and gentle. Highly recommended!',time:'2 weeks ago'},
    { name:'Sachin Kale',rating:5,text:'Best dental care in Ashta! Got my dental implants done here and the results are perfect. The doctors are experts and the facility is top-class.',time:'3 weeks ago'},
    { name:'Sunita Patil',rating:5,text:'Amazing dental clinic! The treatment is painless and affordable. The doctors are very caring and professional. My whole family comes here for dental care.',time:'1 month ago'},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ⭐ Google Badge + Heading (restored) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg mb-6 border border-gray-100">
            <span className="text-2xl font-bold">5.0</span>
            <div className="flex">
              {[1,2,3,4,5].map((s)=>(<Star key={s} className="text-yellow-400 fill-yellow-400" size={18}/>))}
            </div>
            <span className="text-sm text-gray-500">Rating on Google</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most Trusted Dental Clinic in Ashta • Trusted by hundreds of satisfied patients
          </p>
        </div>

        {/* ⭐ Slider */}
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square md:aspect-auto md:min-h-[320px] flex flex-col border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{review.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{review.time}</p>

                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star)=>(
                      <Star key={star} className="text-yellow-400 fill-yellow-400" size={18}/>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed flex-1 overflow-hidden line-clamp-6">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ⭐ Button */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/CZGjYx8qH8oXEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={20}/>
            View All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
