import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string | React.ReactNode;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  fallback,
  sizes = "(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px",
  priority = false,
  onLoad,
  onError,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate responsive srcSet from Builder.io URL
  const generateSrcSet = (baseUrl: string) => {
    const sizes = [100, 200, 400, 800];
    return sizes
      .map((size) => `${baseUrl}?format=webp&width=${size} ${size}w`)
      .join(", ");
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError && fallback) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        {typeof fallback === "string" ? (
          <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
            {fallback}
          </div>
        ) : (
          fallback
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={`${src}?format=webp&width=400`}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-300",
          isLoading ? "opacity-0" : "opacity-100",
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          imageRendering: "auto",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
}

// Avatar component specifically for profile images
interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  initials?: string;
}

export function Avatar({
  src,
  alt,
  size = "md",
  className,
  initials,
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-xs sm:text-sm",
    lg: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-sm sm:text-base",
  };

  const fallback = initials ? (
    <div className="w-full h-full bg-orange-400 text-white font-semibold flex items-center justify-center">
      {initials}
    </div>
  ) : (
    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
      <svg
        className="w-1/2 h-1/2 text-gray-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0",
        sizeClasses[size],
        className,
      )}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        fallback={fallback}
        sizes="(max-width: 640px) 40px, (max-width: 1024px) 50px, 60px"
        priority={true}
      />
    </div>
  );
}

// Logo component specifically for brand logos
interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export function Logo({
  src,
  alt,
  className,
  fallbackText = "Logo",
}: LogoProps) {
  const fallback = (
    <div className="flex items-center justify-center space-x-2 text-gray-900">
      <div className="w-6 h-6 bg-sidebar rounded-sm flex items-center justify-center">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      </div>
      <span className="font-bold text-base sm:text-lg">{fallbackText}</span>
    </div>
  );

  return (
    <div className={cn("h-6 sm:h-7 md:h-8 w-auto max-w-full", className)}>
      <ResponsiveImage
        src={src}
        alt={alt}
        fallback={fallback}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
        priority={true}
        className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
