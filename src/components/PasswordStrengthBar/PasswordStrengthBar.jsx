import { cn, strengthBgColor } from "@/lib/utils";

const indicator = ["Too weak", "Weak", "Medium", "Strong"];

const strengthIndex = {
  "Too weak": 1,
  Weak: 2,
  Medium: 3,
  Strong: 4,
};

const PasswordStrengthBar = ({ strength }) => {
  return (
    <div className="w-1/2 grid grid-cols-4 h-1 gap-[2px] my-2">
      {indicator.slice(0, strengthIndex[strength]).map((name, index) => (
        <div
          key={index}
          className={cn(" h-full", `${strengthBgColor[name]}`)}
        />
      ))}
    </div>
  );
};

export default PasswordStrengthBar;
