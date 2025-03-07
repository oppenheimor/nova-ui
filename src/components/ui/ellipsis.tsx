"use client"

import React, { ReactNode, useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface EllipsisProps {
  children: ReactNode
  icon?: ReactNode
  lines?: number
  className?: string
}

export function Ellipsis({ children, icon, lines = 1, className }: EllipsisProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);
  
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const checkEllipsis = () => {
      const element = contentRef.current;
      if (!element) return;
      
      // 检查内容是否被省略
      const isEllipsisVisible = 
        element.scrollHeight > element.clientHeight || 
        element.scrollWidth > element.clientWidth;
      
      setIsEllipsisActive(isEllipsisVisible);
    };
    
    checkEllipsis();
    
    // 添加窗口大小变化监听，以便在调整大小时重新检查
    window.addEventListener('resize', checkEllipsis);
    return () => {
      window.removeEventListener('resize', checkEllipsis);
    };
  }, [children]);
  
  return (
    <div className={cn("inline-flex max-w-full", className)}>
      <div 
        ref={contentRef}
        className={cn(
          "overflow-hidden", 
          lines === 1 ? "whitespace-nowrap text-ellipsis" : "w-full"
        )}
        style={lines > 1 ? {
          display: '-webkit-box',
          WebkitLineClamp: lines,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        } : undefined}
      >
        {children}
      </div>
      
      {icon && (
        <span className="inline-flex ml-1 w-auto h-auto shrink-0">{icon}</span>
      )}
    </div>
  );
}
