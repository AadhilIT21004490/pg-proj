import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Predictions
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full max-w-fit sm:w-1/2 lg:w-1/3 p-2">
            <div className="w-auto p-10 border border-neutral-700 rounded-xl">
              {option.image && (
                <img src={option.image} alt={option.title} className="mb-8 w-auto max-h-fit rounded-lg" />
              )}
              <p className="text-2xl mb-8">
                {option.title}
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p> */}
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex text-justify italic items-center">
                    {/* <CheckCircle2 /> */}
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Diagnose
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
