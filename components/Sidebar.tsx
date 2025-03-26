import React from 'react';
import NewDocumentButton from './NewDocumentButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

function Sidebar() {
  return (
    <div className="p-2 md:5 bg-gray-200 relative">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="p-2 hover:opacity-30 rounded-lg" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{/* Options */}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
}

export default Sidebar;
