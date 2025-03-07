'use client';

import React from 'react';
import { hexToRgba, rgbaToHex } from './utils';
import { colorList } from './constant';
import { 
  TooltipProvider, 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent 
} from '@/components/ui/tooltip';

interface ColorCellProps {
  color: string;
}

function ColorCell({ color }: ColorCellProps) {
  const [displayColor, setDisplayColor] = React.useState(color);

  const tooltipContent = displayColor.startsWith('#')
    ? '点击切换为 RGBA 格式'
    : '点击切换为 HEX 格式';

  const handleClick = () => {
    if (displayColor.startsWith('#')) {
      setDisplayColor(hexToRgba(displayColor));
    } else if (displayColor.startsWith('rgb')) {
      setDisplayColor(rgbaToHex(displayColor));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <div 
              className="w-20 h-5 rounded border" 
              style={{ backgroundColor: color }} 
            />
            <span className="text-xs">{displayColor}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function ColorStandard() {
  const [tokenSearch, setTokenSearch] = React.useState('');
  const [lightSearch, setLightSearch] = React.useState('');
  const [darkSearch, setDarkSearch] = React.useState('');

  const filteredColorList = React.useMemo(() => {
    return colorList
      .map(category => ({
        ...category,
        colors: category.colors.filter(color => {
          const tokenMatch = color.tokenKey.toLowerCase().includes(tokenSearch.toLowerCase());
          const lightMatch = color.lightValue.toLowerCase().includes(lightSearch.toLowerCase());
          const darkMatch = color.darkValue.toLowerCase().includes(darkSearch.toLowerCase());
          return tokenMatch && lightMatch && darkMatch;
        })
      }))
      .filter(category => category.colors.length > 0);
  }, [tokenSearch, lightSearch, darkSearch]);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center">
        {/* <div className="text-base font-medium">token 搜索：</div> */}
        <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="text-sm">token 名称：</span>
              <input
                type="text"
                placeholder="搜索 token 名称..."
                value={tokenSearch}
                onChange={(e) => setTokenSearch(e.target.value)}
                className="px-3 py-1.5 text-sm border rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex gap-2 items-center">
                <span className="text-sm">浅色模式：</span>
                <input
                  type="text"
                  placeholder="搜索浅色模式颜色..."
                  value={lightSearch}
                  onChange={(e) => setLightSearch(e.target.value)}
                  className="px-3 py-1.5 text-sm border rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="flex gap-2 items-center">
                <span className="text-sm">深色模式：</span>
                <input
                  type="text"
                  placeholder="搜索深色模式颜色..."
                  value={darkSearch}
                  onChange={(e) => setDarkSearch(e.target.value)}
                  className="px-3 py-1.5 text-sm border rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
      </div>

      {filteredColorList.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-sm text-gray-500 bg-gray-50 rounded-md dark:bg-black/90">
          该 token 不存在
        </div>
      ) : (
        filteredColorList.map((item) => (
          <div key={item.title} className="space-y-2">
            <h1 className="text-base font-medium">{item.title}</h1>
            <div className="grid grid-cols-3 p-3 text-xs text-gray-500 bg-gray-200 rounded-md dark:bg-black/90">
              <div>Token 名</div>
              <div>值 - 浅色</div>
              <div>值 - 深色</div>
            </div>

            <div className="space-y-4">
              {item.colors.map((color) => (
                <div key={color.tokenKey} className="grid grid-cols-3 items-center py-2">
                  <div className="text-sm">
                    <div className='text-xs'>{color.tokenKey}</div>
                    <div className="mt-1 text-xs text-gray-500">{color.label}</div>
                  </div>
                  <ColorCell color={color.lightValue} />
                  <ColorCell color={color.darkValue} />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
