import * as React from 'react'
import { Button } from "@/components/ui/button"
 
export function ButtonVariants() {
  return (
    <div className="flex-wrap gap-3 flex-row-start">
      <Button variant="primary">Button</Button>
      <Button variant="default">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="link" className="gap-0">
        Link Button
          <svg
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 24 24"
          fill="none"
          aria-label="Link Icon"
        >
          <path 
            d="M7.96909 4.03L15.9382 11.9991L7.96909 19.9682" 
            fillOpacity="0"
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="square" 
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
