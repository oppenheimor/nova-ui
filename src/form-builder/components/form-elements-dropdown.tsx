import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import { FormElement } from '@/form-builder/form-types';
import { FaPlus } from 'react-icons/fa';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

/**
 * Use for adding a nested form element
 */
//======================================
export function FormElementsDropdown({
  fieldIndex,
  stepIndex,
}: {
  /**
   * Field Index where a nested element should be appended to the main array
   */
  fieldIndex: number;
  stepIndex?: number;
}) {
  const appendElement = useFormBuilderStore((s) => s.appendElement);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-9 rounded-xl">
          <FaPlus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-align="end" // not working
        className="overflow-y-scroll space-y-3 max-h-64"
      >
        {formElementsList.map((o) => (
          <DropdownMenuItem
            onSelect={() => {
              appendElement({
                fieldIndex,
                fieldType: o.fieldType as FormElement['fieldType'],
                stepIndex,
              });
            }}
            key={o.name}
            disabled={!!o.static}
            className="px-4"
          >
            {o.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * Use for adding a form element to the form when MSF is enabled
 */
//======================================
export function FormElementsStepDropdown({
  stepIndex,
}: {
  stepIndex?: number;
}) {
  const appendElement = useFormBuilderStore((s) => s.appendElement);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className={'h-9 rounded-xl'}>
          <div className="gap-2 flex-row-start">
            <FaPlus />
            Add Element
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-align="end" // not working
        className="overflow-y-scroll space-y-3 max-h-64"
      >
        {formElementsList.map((o) => (
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault(); // Prevent the menu from closing
              appendElement({
                fieldIndex: null,
                fieldType: o.fieldType as FormElement['fieldType'],
                stepIndex,
              });
            }}
            key={o.name}
            className="px-4"
          >
            {o.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
