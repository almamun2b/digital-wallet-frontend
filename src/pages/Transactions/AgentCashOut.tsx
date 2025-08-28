import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentCashOut = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Cash Out</CardTitle>
        </CardHeader>
        <CardContent className="text-base">
          <p>Check your transaction history to confirm the transaction.</p>
          <p>After confirmation, give cash to the customer.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentCashOut;
