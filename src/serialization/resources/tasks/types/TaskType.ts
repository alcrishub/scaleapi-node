/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const TaskType: core.serialization.Schema<serializers.TaskType.Raw, Scale.TaskType> = core.serialization.enum_([
    "annotation",
    "categorization",
    "comparison",
    "cuboidannotation",
    "datacollection",
    "documentmodel",
    "documenttranscription",
    "imageannotation",
    "laneannotation",
    "lidarannotation",
    "lidarlinking",
    "lidarsegmentation",
    "lidartopdown",
    "lineannotation",
    "namedentityrecognition",
    "pointannotation",
    "polygonannotation",
    "segmentannotation",
    "transcription",
    "textcollection",
    "videoannotation",
    "videoboxannotation",
    "videoplaybackannotation",
    "videocuboidannotation",
]);

export declare namespace TaskType {
    type Raw =
        | "annotation"
        | "categorization"
        | "comparison"
        | "cuboidannotation"
        | "datacollection"
        | "documentmodel"
        | "documenttranscription"
        | "imageannotation"
        | "laneannotation"
        | "lidarannotation"
        | "lidarlinking"
        | "lidarsegmentation"
        | "lidartopdown"
        | "lineannotation"
        | "namedentityrecognition"
        | "pointannotation"
        | "polygonannotation"
        | "segmentannotation"
        | "transcription"
        | "textcollection"
        | "videoannotation"
        | "videoboxannotation"
        | "videoplaybackannotation"
        | "videocuboidannotation";
}
