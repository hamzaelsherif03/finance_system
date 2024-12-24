import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BonusTable } from "@/components/bonus/BonusTable";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BonusRequestForm } from "@/components/bonus/BonusRequestForm";
import { PlusCircle } from "lucide-react";

const Bonuses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="animate-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Bonuses</h1>
        {userRole !== "Financial Staff" && (
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Bonus Request
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bonus Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <BonusTable />
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Bonus Request</DialogTitle>
          </DialogHeader>
          <BonusRequestForm onClose={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bonuses;