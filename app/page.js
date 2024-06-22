import { card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/components/dummy_data/constants";
import { CalendarIcon, HeartIcon } from "lucide-react";
import { Card } from "@/components/ui/card";


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Card className="p-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrp9qHhe5jXE6ah-sGsl6ELCPvTDMRCPaeg&s" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">Kiran Sokhi</h2>
              <p className="text-gray-500">@kiran_sokhi</p>
              <p className="text-gray-600">⭐️7.5 star</p>
              <Button
                className="mt-4 w-full rounded-full bg-[#509C80] hover:bg-[#3c7560]"
                variant="default"
              >
                Get in Touch
              </Button>
              <p className="text-gray-500 mt-2">
                Typically responds within 24 hours
              </p>
            </div>
            <div className="mt-8">
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-[#509C80] hover:text-white"
                  >
                    Services
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start  hover:bg-[#509C80] hover:text-white"
                  >
                    Projects
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start  hover:bg-[#509C80] hover:text-white"
                  >
                    Reviews
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start  hover:bg-[#509C80] hover:text-white"
                  >
                    FAQs
                  </Button>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="p-4">
            <h1 className="text-2xl font-bold font-serif">
              We build BOLD brands that get noticed!!!
            </h1>
            <p className="mt-2 text-gray-700">
              I am Kiran, a proud member of our startup, LitBrand. With a strong
              emphasis on leadership, I bring my expertise in UI/UX design to
              the table.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-[#509C80]">Skills and Tools</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outlined">Web Development</Badge>
                <Badge variant="outlined">Graphic Design</Badge>
                <Badge variant="outlined">UI/UX Design</Badge>
                <Badge variant="outlined">Sketch</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-[#509C80]">Badges</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outlined">🔥 Fast Delivery</Badge>
                <Badge variant="outlined">👑 Top Projects</Badge>
                <Badge variant="outlined">✅ Verified</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-[#509C80]">Languages</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outlined">English</Badge>
                <Badge variant="outlined">Gujarati</Badge>
                <Badge variant="outlined">French</Badge>
              </div>
            </div>
          </Card>
          <div className="mt-4 space-y-4">
            {products.map((product, index) => (
              <Card key={index} className="p-4 flex">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-48 h-36 object-cover m-1 mr-4 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold font-serif">Logo & Branding</h3>
                  <p className="text-gray-700 mt-2">
                    I designed a comprehensive brand identity for Company Name,
                    including a logo and a cohesive visual style. This project
                    showcases my ability to create visually appealing and
                    effective branding solutions.
                  </p>
                  <div className="flex items-center mt-2 text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>2 weeks</span>
                    <HeartIcon className="h-4 w-4 ml-auto" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

