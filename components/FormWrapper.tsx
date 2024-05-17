import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormWrapperProps {
  children: React.ReactNode;
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <Card className="min-w-[500px] max-w-[500px] bg-transparent border-none">
      <CardContent>{children}</CardContent>
    </Card>
  );
};
