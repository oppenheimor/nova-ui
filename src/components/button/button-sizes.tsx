import * as React from 'react'
import { Button } from "@/components/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex-wrap gap-3 flex-row-start">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button>base</Button>
      <Button size="lg">lg</Button>
    </div>
  )
}
