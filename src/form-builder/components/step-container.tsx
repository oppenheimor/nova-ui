import { Button } from '@/components/ui/button';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { motion } from 'framer-motion';
import { MdAdd, MdDelete } from 'react-icons/md';
import { FormElementsStepDropdown } from '@/form-builder/components/form-elements-dropdown';

//======================================
export function StepContainer({
  children,
  stepIndex,
  fieldIndex,
}: {
  children: React.ReactNode;
  stepIndex: number;
  fieldIndex?: number;
}) {
  const { addFormStep, removeFormStep } = useFormBuilderStore();
  return (
    <motion.div
      key={stepIndex}
      className="px-3 py-4 rounded-lg border border-dashed md:px-4 md:py-5 bg-secondary/40"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.05 } }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
    >
      <div className="mb-3 flex-row-start">
        <FormElementsStepDropdown stepIndex={stepIndex} />
      </div>
      <div className="space-y-3">{children}</div>
      <div className="px-2 pt-4 flex-row-between">
        <div className="py-1 font-medium text-muted-foreground center">
          Step {stepIndex + 1}
        </div>
        <div className="gap-3 flex-row-end">
          <Button
            onClick={() => removeFormStep(stepIndex)}
            className="rounded-lg"
            type="button"
          >
            <MdDelete />
          </Button>
          <Button
            type="button"
            className="rounded-lg"
            onClick={() => addFormStep(stepIndex)}
          >
            <MdAdd />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
