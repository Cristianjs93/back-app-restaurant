import { Request, Response } from "express";
import { Facilities } from "./facilities.types";
import { AuthRequestFacilities } from "../../auth/auth.types";
import {
   getAllFacilities,
   getFacilityById,
   createFacility,
   updateFacility,
   deleteFacility
} from "./facilities.services";

export async function getAllFacilitiesHandler(req: Request, res: Response) {
   try {
      const facilities = await getAllFacilities();
      res.status(200).json(facilities);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function getFacilityByIdHandler(req: Request, res: Response) {
   try {
      const { id } = req.params;
      const facility = await getFacilityById(id);
      if (!facility) {
         res.status(404).json({
            message: "Facility not found"
         });
      }
      res.status(200).json(facility);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function createFacilityHandler(req: Request, res: Response) {
   try {
      const data = req.body;
      const facility = await createFacility(data);
      res.status(201).json(facility);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function updateFacilityHandler(req: Request, res: Response) {
   try {
      const data = req.body;

      const facility = await updateFacility(data);

      if (!facility) {
         res.status(404).json({ message: "Facility not found" });
      }

      res.status(200).json(facility);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}

export async function deleteFacilityHandler(
   req: AuthRequestFacilities,
   res: Response
) {
   try {
      const { id } = req.body;
      const facility = await getFacilityById(id);

      if (!facility) {
         return res.status(404).json({
            message: "Facility not found"
         });
      }

      await deleteFacility(id);

      res.status(200).json(facility);
   } catch ({ message }: any) {
      res.status(400).json({ message });
   }
}
