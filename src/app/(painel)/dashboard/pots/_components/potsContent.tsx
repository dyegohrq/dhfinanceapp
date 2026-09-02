import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export function PotsContent() {
  return (
    <div className=" p-6 flex items-center justify-between max-h-20 lg:w-[calc(100vw-180px)]">
      <h1 className=" present-1 text-grey-900 ">Metas</h1>
      <Dialog>
        <DialogTrigger render={<Button className={"px-7"}>Nova meta</Button>} />
      </Dialog>
    </div>
  );
}
