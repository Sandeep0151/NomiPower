import pricingPlan1 from "../../public/assets/img/pricing-plans-1.png";
import pricingPlan2 from "../../public/assets/img/pricing-plans-2.png";
import pricingPlan3 from "../../public/assets/img/pricing-plans-3.png";
import pricingPlan4 from "../../public/assets/img/pricing-plans-4.jpg";
import pricingPlan5 from "../../public/assets/img/pricing-plans-5.jpg";
import pricingPlan6 from "../../public/assets/img/pricing-plans-6.jpg";
import { pricingPlan } from "@/interFace/interFace";
export const pricingPlanData:pricingPlan[] = [
    {
        id:1,
        title:"Solar Energy",
        price:"90",
        package:"Month",
        img:pricingPlan1,
    },
    {
        id:2,
        title:"Hydroelectric Energy",
        price:"50",
        package:"Month",
        img:pricingPlan2,
    },
    {
        id:3,
        title:"Wind Energy",
        price:"120",
        package:"Month",
        img:pricingPlan3,
    },
    {
        id:4,
        title:"Nuclear Energy",
        price:"140",
        package:"Month",
        img:pricingPlan4,
    },
    {
        id:5,
        title:"Tidal Energy",
        price:"160",
        package:"Month",
        img:pricingPlan5,
    },
    {
        id:6,
        title:"Wave Energy",
        price:"210",
        package:"Month",
        img:pricingPlan6,
    },
]