export default function ImagePlaceholder({ 
  aspectRatio = "aspect-video", 
  label = "Image" 
}: { 
  aspectRatio?: string, 
  label?: string 
}) {
  return (
    <div className={`w-full ${aspectRatio} bg-[#e0d6c8] flex items-center justify-center`}>
      <span className="font-sans uppercase tracking-widest text-xs text-[#2A2A28]/50">
        [ {label} Placeholder ]
      </span>
    </div>
  );
}
