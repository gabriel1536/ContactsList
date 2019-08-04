import React from 'react';

function Detail(props) {
    const { subtitleName, subValue, phoneType } = props;

    if (!subValue) {
        return '';
    }

    return (
        <div>
            <div className="border-bottom"></div>
            <div className="row">
                <div className="col-12 profile-subtitle text-sm-left">
                    <label className="text-muted subtitle-size fixed-space">{subtitleName}:</label>
                    <br />
                    <span className="value-name subtitle-size text-sm-left">{subValue}</span>
                    {!!phoneType ? <span className="text-muted right-sided-text text-sm-right">{phoneType}</span> : ''}
                </div>
            </div>
        </div>
    );
}

export default Detail;