import zomatoImg from "../../assets/zomato3.png";

const ZomatoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 px-6 py-20 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden">

      {/* Left: Text Content */}
      <div className="md:w-1/2 z-10 pl-4 sm:pl-10">
        <div className="space-y-8 text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Seamless Zomato Onboarding <br />
            <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
              For Your Restaurant
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            Getting listed on Zomato has never been easier. Our team ensures every aspect of your online presence is handled professionally — from initial registration to a fully optimized listing that draws more customers and increases your order volume.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            We take the hassle out of setting up by managing everything — designing your menu, enabling delivery services, activating payment options, and making sure your brand stands out. You get a full-service experience so you can focus on running your restaurant.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            Whether you’re a cloud kitchen, a multi-cuisine restaurant, or a small café, we help you make a professional first impression and reach more customers through Zomato. Our goal is simple — more visibility, more orders, and a smoother digital journey.
          </p>

          <p className="text-sm text-gray-500 mt-2">Trusted by hundreds of food entrepreneurs across India.</p>
        </div>
      </div>

      {/* Right: Zomato Image */}
      <div className="md:w-1/2 z-10 flex justify-center">
        <img
          src={zomatoImg}
          alt="Zomato Setup"
          className="w-full max-w-2xl rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-100 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-yellow-100 rounded-full blur-2xl opacity-30 z-0" />
    </div>
  );
};

export default ZomatoPage;
