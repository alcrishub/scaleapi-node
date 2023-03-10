/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const Polygon: core.serialization.ObjectSchema<serializers.Polygon.Raw, Scale.Polygon> =
    core.serialization.object({
        objectsToAnnotate: core.serialization.property(
            "objects_to_annotate",
            core.serialization.list(core.serialization.unknown()).optional()
        ),
        minVertices: core.serialization.property("min_vertices", core.serialization.number().optional()),
        maxVertices: core.serialization.property("max_vertices", core.serialization.number().optional()),
    });

export declare namespace Polygon {
    interface Raw {
        objects_to_annotate?: unknown[] | null;
        min_vertices?: number | null;
        max_vertices?: number | null;
    }
}
