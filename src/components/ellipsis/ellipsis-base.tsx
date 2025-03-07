import { Ellipsis } from '@/components/ui/ellipsis';
import { ArrowUpRight } from 'lucide-react';

export function EllipsisBase() {
  return (
    <Ellipsis lines={3} icon={<ArrowUpRight className="w-4 h-4" />}>
      发送需求后
      {/* 发送需求后，AI 助手生成的内容将以 Diff 的形式展示在编辑器内。你可以预览变更前后的代码，然后选择采纳或拒绝。
若你需要接受或拒绝所有内容，点击对话框左下角的 接受 按钮（快捷键：macOS 为 Command + Enter；Windows 为 Ctrl + Enter）或 拒绝 按钮（快捷键：macOS 为 Command + Backspace；Windows 为 Ctrl + Backspace）按钮。
若你需要接受或拒绝部分内容，点击内容片段右上角的 ^Y 按钮（快捷键：macOS 为 Control + Y；Windows 为 Alt + Y）或 ^N 按钮（快捷键：macOS 为 Control + N；Windows 为 Alt + N）。 */}
    </Ellipsis>
  );
}
