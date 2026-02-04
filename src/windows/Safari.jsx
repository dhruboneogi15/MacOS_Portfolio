import React from 'react'
import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {ChevronLeft, ChevronRight, ShieldHalf, PanelLeft, Search, Share, Plus, Copy, MoveRight} from "lucide-react";
import {codingProfiles} from "#constants/index.js";

const Safari = () => {
    return (
        <>
        <div id="window-header">
            <WindowControls target="safari"/>

            <PanelLeft className="ml-10 icon"/>
            <div className="flex items-center gap-1 ml-5">
                <ChevronLeft className="icon" />
                <ChevronRight className="icon"/>
            </div>

            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className="icon"/>

                <div className="search">
                    <Search className="icon" />

                        <input
                            type="text"
                            placeholder="Search or enter web"
                            className="flex-1"
                        />
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon"/>
                    <Plus className="icon"/>
                    <Copy className="icon"/>
                </div>
            </div>
        </div>

        <div className="blog">
            <h2>My Coding Profiles</h2>

            <div className="space-y-8">
                {codingProfiles.map(({id, image, title, date, link}) => (
                    <div key={id} className="blog-post">
                        <div className="col-span-2">
                            <img src={image} alt={title}/>
                        </div>

                        <div className="content">
                            <p>{date}</p>
                            <p>{title}</p>
                            <a href={link} target="_blank"
                               rel="noopener noreferrer">
                                Link to my profile <MoveRight
                                  className="icon-hover" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
