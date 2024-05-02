import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <Card className="min-w-[500px] max-w-[500px] bg-transparent border-none">
      <CardHeader>
        <CardTitle className="text-[#A8E198] text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
