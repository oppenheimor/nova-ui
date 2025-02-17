import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

// 定义 Switch 组件的属性接口
interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  // 图标类型：检查标记或加载动画
  iconType?: 'check' | 'loading';
  // 按钮大小：小、中、大
  size?: 'sm' | 'md' | 'lg';
}

// 定义不同大小按钮的尺寸和移动距离
const SIZE_MAP = {
  lg: {
    width: 52,
    height: 32,
    thumbWidth: 28,
    thumbHeight: 28,
    moveX: 'data-[state=checked]:translate-x-[20px]',
  },
  md: {
    width: 39,
    height: 24,
    thumbWidth: 20,
    thumbHeight: 20,
    moveX: 'data-[state=checked]:translate-x-[15px]',
  },
  sm: {
    width: 26,
    height: 16,
    thumbWidth: 12,
    thumbHeight: 12,
    moveX: 'data-[state=checked]:translate-x-[10px]',
  },
};

// 定义检查标记图标
const CHECK_ICON = (width: number, height: number) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={15 * (width / 52)}
    height={12 * (height / 32)}
    viewBox="0 0 15 12"
    fill="none"
    className={cn('group-data-[state=unchecked]:invisible')}
  >
    <path
      d="M14.0225 1.50598L5.00694 10.5216L1 6.51465"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// 定义加载动画图标
const LOADING_ICON = (width: number, height: number) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={16 * (width / 52)}
    height={16 * (height / 32)}
    viewBox="0 0 16 16"
    fill="none"
    className="animate-spin" // 添加旋转动画
  >
    <path
      d="M7.99922 15.8002C3.69922 15.8002 0.199219 12.3002 0.199219 8.0002C0.199219 3.7002 3.69922 0.200195 7.99922 0.200195C11.4492 0.200195 14.4492 2.4002 15.4492 5.7002C15.5492 6.0502 15.3492 6.4502 14.9992 6.5502C14.6492 6.6502 14.2492 6.4502 14.1492 6.1002C13.2992 3.4002 10.8492 1.6002 7.99922 1.6002C4.44922 1.5502 1.54922 4.4502 1.54922 8.0002C1.54922 11.5502 4.44922 14.4502 7.99922 14.4502C10.8492 14.4502 13.2992 12.6502 14.1492 9.9502C14.2492 9.60019 14.6492 9.4002 14.9992 9.5002C15.3492 9.6002 15.5492 10.0002 15.4492 10.3502C14.4492 13.6002 11.4492 15.8002 7.99922 15.8002Z"
      fill="currentColor"
    />
  </svg>
);

// 定义 Switch 组件
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size = 'lg', iconType = '', ...props }, ref) => {
  // 获取当前大小的尺寸和移动距离
  const { width, height, thumbWidth, thumbHeight, moveX } = SIZE_MAP[size];

  // 动态生成类名
  const rootClassName = cn(
    'peer inline-flex shrink-0 cursor-pointer items-center rounded-full px-[2px]',
    'border-1 border-divider-level2 shadow-sm transition-colors focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-10',
    'data-[state=checked]:bg-brand-primary-black data-[state=unchecked]:bg-background-weak text-text-primary',
    className,
  );

  const thumbClassName = cn(
    'pointer-events-none rounded-full shadow-lg ring-0 transition-transform',
    'data-[state=unchecked]:translate-x-0',
    'flex items-center justify-center w-full h-full', // 确保 Thumb 占据整个滑块空间
    'group bg-foreground-layer1',
    moveX,
  );

  return (
    <SwitchPrimitives.Root
      className={rootClassName}
      style={{ width, height }}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={thumbClassName}
        style={{ width: thumbWidth, height: thumbHeight }}
      >
        {/* // 如果 iconType 为 'check'，则显示检查标记图标 */}
        {iconType === 'check' && CHECK_ICON(width, height)}
        {/* // 如果 iconType 为 'loading'，则显示加载动画图标 */}
        {iconType === 'loading' && LOADING_ICON(width, height)}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

// 设置组件的 displayName
Switch.displayName = SwitchPrimitives.Root.displayName;

// 导出 Switch 组件
export { Switch };
