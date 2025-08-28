import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CashIn = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Deposit Money</CardTitle>
        </CardHeader>
        <CardContent className="text-base">
          <p>
            For Cash-in/Deposit Money got to agent and give your wallet number.
          </p>
          <p>Then the agent will Deposit monet to your wallet</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashIn;
