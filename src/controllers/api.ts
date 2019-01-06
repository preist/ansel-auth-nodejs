"use strict";

import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * Example endpoint
 */
export let getApi = (req: Request, res: Response) => {
  res.json({
    title: "API Examples"
  });
};
