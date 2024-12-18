import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DynamicImage from "../DynamicImages/DynamicImage";

export function OpenBoxImages({ openBoxImages }) {
  const imageTypes = [
    { type: "primary", label: "Primary" },
    { type: "secondary", label: "Secondary" },
    { type: "tertiary", label: "Tertiary" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue5 text-[13px] leading-[20px] bg-transparent border-0">
          Open-Box Images
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[720px] rounded-[20px] p-0 ">
        <DialogHeader>
          <DialogTitle className="border-b border-b-gray21 text-[25px] py-[30px] px-4 leading-[37px] font-semibold text-blue2">
            Open-Box Images
          </DialogTitle>
          <DialogDescription>
            <div className="px-9 py-[30px]">
              <div className="flex gap-12 px-[30px]">
                {imageTypes.map(({ type, label }) => openBoxImages[type] && (
                  <div key={type} className="flex flex-col items-center">
                    <p className="text-center mb-2 font-semibold">{label}</p>
                    <DynamicImage
                      src={openBoxImages[type]}
                      className="object-contain border-gray12 border px-2 py-1 rounded-[6px]"
                      width={200}
                      height={50}
                      alt={`${label} Image`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
